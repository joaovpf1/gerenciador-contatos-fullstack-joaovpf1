import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./clients.entity";

@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("increment") 
    id: number;

    @Column({ length: 45 })
    nomeCompleto: string

    @Column({ })
    email: string

    @Column({ })
    telefone: string

    @CreateDateColumn({ type: "date" })
    dataDeRegistro: string

    @ManyToOne(()=> Client, (client)=> client.contacts)
    client: Client
}