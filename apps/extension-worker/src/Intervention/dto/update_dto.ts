import { ApiProperty } from "@nestjs/swagger"
import { Intervention } from "@prisma/client"

export class UpdateDto {
    @ApiProperty()
    id: string
    @ApiProperty()
    properties: Partial<Intervention>

}
