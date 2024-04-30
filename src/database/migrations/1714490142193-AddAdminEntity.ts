import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAdminEntity1714490142193 implements MigrationInterface {
    name = 'AddAdminEntity1714490142193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admins" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_e3b38270c97a854c48d2e80874e" PRIMARY KEY ("id")); COMMENT ON COLUMN "admins"."id" IS 'Идентификатор пользователя'; COMMENT ON COLUMN "admins"."email" IS 'Email администратора'; COMMENT ON COLUMN "admins"."password" IS 'Пароль администратора'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "admins"`);
    }

}
