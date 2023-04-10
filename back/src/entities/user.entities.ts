import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  OneToMany,
  BeforeUpdate,
} from "typeorm";
import { Client } from "./client.entities";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  contact: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createDateAtt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const newPassword = getRounds(this.password);

    if (!newPassword) this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Client, (Client) => Client.User, { onDelete: "CASCADE" })
  Clients: Client[];
}
