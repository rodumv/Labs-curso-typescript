function imprimir(
  a: number,
  b: number,
  mostrar: (value: number) => void
): void {
  let resultado = a + b;
  mostrar(resultado);
}

imprimir(3, 2, x => {
  console.log(x);
});
