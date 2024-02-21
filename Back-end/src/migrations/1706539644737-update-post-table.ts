import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostTable1706539644737 implements MigrationInterface {
    name = 'UpdatePostTable1706539644737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "telefone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "telefone" integer NOT NULL`);
    }

}
