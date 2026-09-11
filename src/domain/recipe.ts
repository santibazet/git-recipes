export class Recipe {
  _name!: string;
  _category?: string;
  _description?: string;
  _tiempo!: number;

  constructor(aName: string, aTiempo: number) {
    this.name = aName;
    this._tiempo = aTiempo;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  set description (aDesc: string) {
    this._description = aDesc;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - descripcion: ${this._description} - tiempo de preparacion: ${this._tiempo}`;
  }

  set tiempo(aTiempo: number) {
    this._tiempo = aTiempo;
  }
}
