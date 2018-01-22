import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Pet } from './Pet';

@Entity()
export class User {

    @ObjectIdColumn()
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'first_name' })
    public firstName: string;

    @IsNotEmpty()
    @Column({ name: 'last_name' })
    public lastName: string;

    @IsNotEmpty()
    @Column()
    public email: string;

    @Column(type => Pet)
    public pets: Pet[];

    public toString(): string {
        return `${this.firstName} ${this.lastName} (${this.email})`;
    }

}
