      # language: pt

      Funcionalidade: Tela de Carrinho

      Contexto:
      Dado que entro no site "https://www.advantageonlineshopping.com"


      Cenário: Adicionar mais quantidadede de um mesmo produto ao carrinho
      Quando o usuário digita "HEADPHONES" na barra de busca
      E clica no ícone de lupa
      E clica no produto "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES" na lista de resultados
      E na página do produto, altera a quantidade para 3
      E clica no botão "ADD TO CART" na página do produto
      Então o produto deve aparecer no canto superior direito da tela como adicionado
      | Produto                     | Valor   | Quantidade |
      | BEATS STUDIO 2 OVER-EAR MAT | $539.97 | 3          |
      E ao verificar o carrinho de compras, o produto deve estar listado corretamente com a quantidade correta
      | Produto                                        | Valor   | Quantidade |
      | BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES | $539.97 | 3          |

      Cenário: Editar a quantidade de um produto já adicionado no carrinho
      Quando o usuário digita "HEADPHONES" na barra de busca
      E clica no ícone de lupa
      E clica no produto "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES" na lista de resultados
      E clica no botão "ADD TO CART" na página do produto
      E o usuário abre o carrinho de compras
      E altera a quantidade do produto "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES" para 4
      E clica no botão "ADD TO CART" na página do produto
      Então o carrinho de compras deve refletir a nova quantidade e valor total
      | Produto                                        | Valor  | Quantidade |
      | BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES | 719.96 | 4          |

      Cenário: Remover os produtos do carrinho de compras
      Quando o usuário digita "HEADPHONES" na barra de busca
      E clica no ícone de lupa
      E clica no produto "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES" na lista de resultados
      E clica no botão "ADD TO CART" na página do produto
      E o usuário abre o carrinho de compras
      E remove o produto "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES" do carrinho
      Então o carrinho de compras deve estar vazio
      E deve aparecer a mensagem "Your shopping cart is empty"
      E deve aparecer o botao "CONTINUE SHOPPING"

      Cenário: Verificar o total do carrinho após adicionar produtos
      Quando o usuário digita "HEADPHONES" na barra de busca
      E clica no ícone de lupa
      E clica no produto "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES" na lista de resultados
      E na página do produto, altera a quantidade para 3
      E clica no botão "ADD TO CART" na página do produto
      E o usuário volta para a página inicial
      E o usuário digita "MOUSE" na barra de busca
      E clica no ícone de lupa
      E clica no produto "HP Z3200 WIRELESS MOUSE" na lista
      E clica no botão "ADD TO CART" na página do produto
      E na página do produto, altera a quantidade para 5
      E clica no botão "ADD TO CART" na página do produto
      Então o total do carrinho de compras deve ser 719.91
      | Produto                                        | Valor  | Quantidade |
      | BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES | 539.97 | 3          |
      | HP Z3200 WIRELESS MOUSE                        | 179.94 | 6          |

      Cenário: Realizar checkout a partir do carrinho de compras
      Quando o usuário digita "HEADPHONES" na barra de busca
      E clica no ícone de lupa
      E clica no produto "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES" na lista de resultados
      E clica no botão "ADD TO CART" na página do produto
      E o usuário abre o carrinho de compras
      E clica no botão "CHECKOUT" no carrinho de compras
      Então deve ser redirecionado para a página de login
      E o usuário realiza login com email e senha válidos
      E os detalhes do produto "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES" devem estar corretos na página de checkout
      | Produto                        | Valor  | Quantidade |
      | BEATS STUDIO 2 OVER-EAR MAT... | 179.99 | 1          |