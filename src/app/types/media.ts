import {autoserialize} from 'cerialize';

export class Media {
    @autoserialize _id: string;
    @autoserialize container: string;
    @autoserialize file: string;
    @autoserialize type: string;
    @autoserialize title?: string;
    @autoserialize description?: string;
    @autoserialize latitude?: number;
    @autoserialize longitude?: number;
    @autoserialize keywords?: string[];
    @autoserialize persons?: string[];
    @autoserialize checksum: string;
    @autoserialize created?: string;
    @autoserialize url?: string;
}
