import type { Config } from '@jest/types';
import { exec } from 'node:child_process';
import dotenv from 'dotenv';
import NodeEnvironment from 'jest-environment-node';
import util from 'node:util';
import crypto from 'node:crypto';

dotenv.config({ path: '.env.testing' });

const execSync = util.promisify(exec);

const prismaBinary = './node_modules/.bin/prisma';

export default class PrismaTestEnvironment extends NodeEnvironment {
  private schema: string;
  private connectionString: string;

  constructor(config: Config.ProjectConfig) {
    super(config)

    this.schema = `test_${crypto.randomUUID()}`;
    this.connectionString = `file:./${this.schema}`
  }

  async setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    await execSync(`${prismaBinary} migrate deploy`)

    return super.setup()
  }

  async teardown() {
   /* process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    await execSync(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`)

    return super.teardown()*/
  }
}
