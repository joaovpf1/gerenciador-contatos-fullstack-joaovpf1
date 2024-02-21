import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contacts.entity";

@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn("increment") 
    id: number;

    @Column({ length: 45 })
    nomeCompleto: string

    @Column({ })
    email: string

    @Column({  })
    senha: string

    @Column({ })
    telefone: string

    @CreateDateColumn({ type: "date" })
    dataDeRegistro: string

    @OneToMany(()=> Contact, (contacts)=> contacts.client)
    contacts: Contact
}