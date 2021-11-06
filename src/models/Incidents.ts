import { Column, Entity, CreateDateColumn,PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import Ong from "./Ong";


@Entity ('incidents')
class Incidents {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
	ong_id: string;

	@ManyToOne(() => Ong)
	@JoinColumn({ name: 'ong_id' })
	ong: Ong;

    @Column()
    title: string;
    
    @Column()
    description: string

    @Column()
    value: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export default Incidents