import { Column, Entity, CreateDateColumn,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity ('incidents')
class Incidents {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;
    
    @Column()
    description: string

    @Column()
    value: string

    @CreateDateColumn()
    created_at: Date

}

export default Incidents