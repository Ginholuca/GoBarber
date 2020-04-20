import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateAppointments1587103617849
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments')
  }
}

/**
 * Migrations: Elas controlam a versão do BD e controlam alterações simultaneas.
 * Ao invés de o dev fazer as alterações no BD, ele cria um arquivo de migration
 * que tem as instruções das alterações que ele quer fazer no BD.
 * Depois só basta executar as migrations.
 * Migration evita que os BD estejam em versões diferentes,
 * sempre teremos a estrutura do BD igual a todos os devs do projeto.
 *
 * SÓ PORDE ALTERAR UMA MIGRATION QUANDO ELA NÂO FOI ENVIADA PARA PRODUÇÃO.
 */
