export class IndicationModel {


    name: string
    office: string
    description: string
    image: string
    reference: string

    constructor(name: string, office: string, description: string, image: string, reference: string) {
        this.name = name
        this.office = office
        this.description = description
        this.image = image
        this.reference = reference
    }

}