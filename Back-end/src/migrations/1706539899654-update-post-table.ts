import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostTable1706539899654 implements MigrationInterface {
    name = 'UpdatePostTable1706539899654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "dataDeRegistro" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "dataDeRegistro" DROP DEFAULT`);
    }

}
