import { Navbar } from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";
import styles from "./ajuda.module.css";

export function Ajuda() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <h1 className={styles.titulo}>Dúvidas Frequentes</h1>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h2>Como faço para comprar um livro?</h2>
            <p>
              Basta navegar pelo site, escolher o livro desejado, clicar em "Adicionar ao carrinho" e finalizar a compra na página do carrinho.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h2>Quais formas de pagamento são aceitas?</h2>
            <p>
              Aceitamos cartões de crédito, débito e Pix.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h2>Como acompanho meu pedido?</h2>
            <p>
              Após a compra, você pode acompanhar o status do seu pedido na área "Meus Pedidos" do menu do usuário.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h2>Posso trocar ou devolver um livro?</h2>
            <p>
              Sim! Consulte nossa página de Trocas e Devoluções para mais informações.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h2>Como entro em contato com o suporte?</h2>
            <p>
              Você pode nos enviar um e-mail ou acessar a Central de Ajuda pelo rodapé do site.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}