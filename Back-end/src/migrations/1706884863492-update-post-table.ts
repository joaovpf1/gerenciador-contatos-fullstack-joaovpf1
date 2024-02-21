import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostTable1706884863492 implements MigrationInterface {
    name = 'UpdatePostTable1706884863492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telefone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telefone" integer NOT NULL`);
    }

}
