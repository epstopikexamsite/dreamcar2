
export interface Location {
    name: string;
    address: string;
    mapSrc: string;
    mapTitle: string;
}

export const locations: Location[] = [
    {
        name: 'Cơ sở 1',
        address: '79 Nguyễn Chánh, Trung Hòa, Cầu Giấy, Hà Nội',
        mapSrc: 'https://maps.google.com/maps?q=79%20Nguyen%20Chanh%2C%20Trung%20Hoa%2C%20Cau%20Giay%2C%20Hanoi&t=&z=16&ie=UTF8&iwloc=&output=embed',
        mapTitle: 'Bản đồ vị trí TIME CARS AUTO - Cơ sở 1'
    },
    {
        name: 'Cơ sở 2',
        address: '158 Việt Hưng, Long Biên, Hà Nội',
        mapSrc: 'https://maps.google.com/maps?q=158%20Viet%20Hung%2C%20Long%20Bien%2C%20Hanoi&t=&z=16&ie=UTF8&iwloc=&output=embed',
        mapTitle: 'Bản đồ vị trí TIME CARS AUTO - Cơ sở 2'
    },
    {
        name: 'Cơ sở 3',
        address: '68 Đinh Núp, Cầu Giấy, Hà Nội',
        mapSrc: 'https://maps.google.com/maps?q=68%20Dinh%20Nup%2C%20Cau%20Giay%2C%20Hanoi&t=&z=16&ie=UTF8&iwloc=&output=embed',
        mapTitle: 'Bản đồ vị trí TIME CARS AUTO - Cơ sở 3'
    }
];
