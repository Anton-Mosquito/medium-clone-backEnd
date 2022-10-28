import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1654605248280 implements MigrationInterface {
  name = 'SeedDb1654605248280';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestJs')`,
    );

    // password is 123
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('foo', 'foo@gmail.com', '$2b$10$wmt5YehnUfuR.lBQDgfRLeE2VQFamAR3WvsIKlDPFYhkCChdJnq4O')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article desc', 'first article body', 'coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'second article desc', 'second article body', 'coffee,dragons', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
