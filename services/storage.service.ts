export default class LocalStorage {
  static getItem (item: string): any {
    return JSON.parse((window.localStorage.getItem(item) as string))
  }

  static setItem (name: string, item: any): void {
    window.localStorage.setItem(name, JSON.stringify(item))
  }
}
