export interface ContactModel {
  name: UserInterface;
  email: string;
  picture: PictureInterface;
  cell: string;
  location: LocationInterface;
}

interface UserInterface {
  first: string;
  last: string;
}

interface PictureInterface {
  thumbnail: string;
}

interface LocationInterface {
  city: string;
  state: string;
}
