import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostTable1706554178640 implements MigrationInterface {
    name = 'UpdatePostTable1706554178640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "dataDeRegistro" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "dataDeRegistro" DROP DEFAULT`);
    }

}
