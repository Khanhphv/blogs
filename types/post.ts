export interface Post {
  id?: string;
  content: string;
  title: string;
  createdAt: string;
  updatedAt?: string;
  tag?: string;
}

enum TAG {
  life = 1,
  code = 2,
  reactjs = 3,
  php = 4,
  javascript = 5,
}
