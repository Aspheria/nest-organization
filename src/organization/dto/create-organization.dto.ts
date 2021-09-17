export class CreateOrganizationDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateOrganizationDto {
  name: string;
  age: number;
  breed: string;
}

export class ListAllEntities {
  limit: number;
}
