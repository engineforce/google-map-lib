import { filter, head, applySpec, pipe, prop, contains, split } from 'ramda';

export async function getAddressInfo(input: IInput): Promise<IAddressInfo> {
  await Promise.resolve();

  return applySpec<IAddressInfo>({
    unitNumber: (input: IInput) => getUnitNumber(input.data.description),
    streetNumber: getAddressComponent('street_number'),
    street: getAddressComponent('route'),
    suburb: getAddressComponent('locality'),
    state: getAddressComponent('administrative_area_level_1'),
    postCode: getAddressComponent('postal_code'),
    country: getAddressComponent('country'),
  })(input);
}

function getAddressComponent(type: string) {
  return pipe(
    prop('detail'),
    prop('address_components'),
    filter((s: any) => contains(type, s.types)),
    head,
    prop('long_name')
  );
}

function getUnitNumber(description: string) {
  if (!description || description.indexOf('/') <= -1) {
    return undefined;
  }

  return description.split('/')[0];
}

export interface IInput {
  data: {
    description: string;
  };
  detail: {
    address_components: {
      long_name: string;
      types: string[];
    }[];
  };
}

export interface IAddressInfo {
  unitNumber?: string;
  streetNumber: string;
  street: string;
  suburb: string;
  state: string;
  postCode: string;
  country: string;
}
