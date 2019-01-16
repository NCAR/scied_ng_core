export class MenuList {
  id: any;
  cols: number;
  rows: number;
  content: {
    title: string;
    description: string;
    url: string;
    placeholder: {
      width: string;
      height: string;
      image?: {
        file: string;
        thumb?: string;
      },
      mp4?: {
        file: string;
      }
    },
    video?:{
      file: string;
      posterframe:string;
      height:number;
      width:number;
    },
    children?:any
  }
}
