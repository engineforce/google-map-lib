import { getAddressInfo } from '../src/getAddressInfo';

test('should extract address info with unit number correctly', async () => {
  expect(await getAddressInfo(getGoogleMapResultMock('3'))).toEqual({
    unitNumber: '3',
    streetNumber: '24',
    street: 'Aisbett Avenue',
    suburb: 'Wantirna South',
    state: 'Victoria',
    postCode: '3152',
    country: 'Australia',
  });
});

test('should extract address info without unit number correctly.', async () => {
  expect(await getAddressInfo(getGoogleMapResultMock())).toEqual({
    streetNumber: '24',
    street: 'Aisbett Avenue',
    suburb: 'Wantirna South',
    state: 'Victoria',
    postCode: '3152',
    country: 'Australia',
  });
});

function getGoogleMapResultMock(unitNumber?: string) {
  const unitNumberText = unitNumber ? unitNumber + '/' : '';
  return {
    data: {
      description: `${unitNumberText}24 Aisbett Avenue, Wantirna South VIC, Australia`,
      id: '6216dd17afe578a3a9fb365d389405405e9a2532',
      matched_substrings: [
        {
          length: 9,
          offset: 0,
        },
      ],
      place_id:
        'EjIzLzI0IEFpc2JldHQgQXZlbnVlLCBXYW50aXJuYSBTb3V0aCBWSUMsIEF1c3RyYWxpYSIwEi4KFAoSCdexsnsSPNZqEYv2tUuAOc6nEBgqFAoSCbXeLwwSPNZqEfwhP9_lEYdf',
      reference:
        'EjIzLzI0IEFpc2JldHQgQXZlbnVlLCBXYW50aXJuYSBTb3V0aCBWSUMsIEF1c3RyYWxpYSIwEi4KFAoSCdexsnsSPNZqEYv2tUuAOc6nEBgqFAoSCbXeLwwSPNZqEfwhP9_lEYdf',
      structured_formatting: {
        main_text: `${unitNumberText}24 Aisbett Avenue`,
        main_text_matched_substrings: [
          {
            length: 9,
            offset: 0,
          },
        ],
        secondary_text: 'Wantirna South VIC, Australia',
      },
      terms: [
        {
          offset: 0,
          value: `${unitNumberText}24 Aisbett Avenue`,
        },
        {
          offset: 21,
          value: 'Wantirna South',
        },
        {
          offset: 36,
          value: 'VIC',
        },
        {
          offset: 41,
          value: 'Australia',
        },
      ],
      types: ['route', 'geocode'],
    },
    detail: {
      address_components: [
        {
          long_name: '24',
          short_name: '24',
          types: ['street_number'],
        },
        {
          long_name: 'Aisbett Avenue',
          short_name: 'Aisbett Ave',
          types: ['route'],
        },
        {
          long_name: 'Wantirna South',
          short_name: 'Wantirna South',
          types: ['locality', 'political'],
        },
        {
          long_name: 'Knox City',
          short_name: 'Knox',
          types: ['administrative_area_level_2', 'political'],
        },
        {
          long_name: 'Victoria',
          short_name: 'VIC',
          types: ['administrative_area_level_1', 'political'],
        },
        {
          long_name: 'Australia',
          short_name: 'AU',
          types: ['country', 'political'],
        },
        {
          long_name: '3152',
          short_name: '3152',
          types: ['postal_code'],
        },
      ],
      adr_address:
        '<span class="street-address">24 Aisbett Ave</span>, <span class="locality">Wantirna South</span> <span class="region">VIC</span> <span class="postal-code">3152</span>, <span class="country-name">Australia</span>',
      formatted_address: '24 Aisbett Ave, Wantirna South VIC 3152, Australia',
      geometry: {
        location: {
          lat: -37.8615305,
          lng: 145.2443559,
        },
        viewport: {
          northeast: {
            lat: -37.86007481970851,
            lng: 145.2457608302915,
          },
          southwest: {
            lat: -37.8627727802915,
            lng: 145.2430628697085,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png',
      id: 'b87affbfc690131e9cc10d14850ea88f21c00d6c',
      name: '24 Aisbett Ave',
      place_id:
        'EjIyNCBBaXNiZXR0IEF2ZSwgV2FudGlybmEgU291dGggVklDIDMxNTIsIEF1c3RyYWxpYSIwEi4KFAoSCdexsnsSPNZqEYv2tUuAOc6nEBgqFAoSCbXeLwwSPNZqEfwhP9_lEYdf',
      reference:
        'EjIyNCBBaXNiZXR0IEF2ZSwgV2FudGlybmEgU291dGggVklDIDMxNTIsIEF1c3RyYWxpYSIwEi4KFAoSCdexsnsSPNZqEYv2tUuAOc6nEBgqFAoSCbXeLwwSPNZqEfwhP9_lEYdf',
      scope: 'GOOGLE',
      types: ['street_address'],
      url:
        'https://maps.google.com/?q=24+Aisbett+Ave,+Wantirna+South+VIC+3152,+Australia&ftid=0x6ad63c127bb2b1d7:0xd67ecb4a2eb4f302',
      utc_offset: 660,
      vicinity: 'Wantirna South',
    },
  };
}
