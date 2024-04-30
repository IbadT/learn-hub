import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("admins")
export class AdminEntity {
    @PrimaryGeneratedColumn("uuid", {
        comment: "Идентификатор пользователя",
        name: "id"
    })
    readonly id: string

    @Column("varchar", {
        comment: "Email администратора",
        nullable: false
    })
    readonly email: string

    @Column("varchar", {
        comment: "Пароль администратора",
        nullable: false,
    })
    readonly password: string
}