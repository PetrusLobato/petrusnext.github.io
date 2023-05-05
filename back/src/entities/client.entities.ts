import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.entities";

@Entity("clients")
export class Client {

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    name: string

    @Column()
    lastName: string

    @Column()
    contact: string

    @Column()
    email: string

    @Column({ default: true })
    isActive: boolean;
    
    @CreateDateColumn()
    createDateAtt: Date

    @ManyToOne(() => User, (user) => user.Clients,{onDelete:"CASCADE"})
    User: User

}