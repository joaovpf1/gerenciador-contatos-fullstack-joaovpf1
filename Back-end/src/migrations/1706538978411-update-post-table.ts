import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostTable1706538978411 implements MigrationInterface {
    name = 'UpdatePostTable1706538978411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "nomeCompleto" character varying(45) NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "telefone" integer NOT NULL, "dataDeRegistro" date NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "nomeCompleto" character varying(45) NOT NULL, "email" character varying NOT NULL, "telefone" integer NOT NULL, "dataDeRegistro" date NOT NULL, "clientId" integer, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_8039454fab552403d5579cf7423"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
