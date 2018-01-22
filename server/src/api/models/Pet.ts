import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';


@Entity()
export class Pet {

    @ObjectIdColumn()
    public id: string;

    @IsNotEmpty()
    @Column()
    public name: string;

    @IsNotEmpty()
    @Column()
    public age: number;

    @Column()
    public userId: number;

    public toString(): string {
        return `${this.name}`;
    }

}
