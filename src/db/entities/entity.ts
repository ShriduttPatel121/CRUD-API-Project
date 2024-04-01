import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ abstract: true })
export class BaseEntity {
    @PrimaryKey({ autoincrement: true })
    id: number;

    @Property({ onCreate: () => new Date() })
    createdAt = new Date();

    @Property({ onUpdate: () => new Date(), onCreate: () => new Date() })
    updatedAt = new Date();
}