import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import formataDinheiro from '../../functions/dinheiroFormatado';
import TituloDaPagina from '../../components/TituloDaPagina';
import Botao from '../../components/Botao';
import './styles.css';

export default function Compra() {
  const itensAdicionados = useSelector((state) => state.carrinho);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let total = 0;
  const somaTotalDeItens = (item) => {
    total += item.preco * item.quantidade;
  };

  const onSubmit = (data) => {
    console.log('Dados do formulário:', data);
    console.log('Itens do carrinho:', itensAdicionados);
    alert('Compra finalizada com sucesso!');
    navigate('/');
  };

  if (itensAdicionados.length === 0) {
    return (
      <div className="container_global">
        <TituloDaPagina>Carrinho vazio</TituloDaPagina>
        <p style={{ color: '#fff', textAlign: 'center' }}>
          Adicione produtos ao carrinho para continuar com a compra.
        </p>
      </div>
    );
  }

  return (
    <div className="container_global">
      <TituloDaPagina>Finalizar Compra</TituloDaPagina>
      
      <div className="compra_container">
        <div className="itens_container">
          <h3>Itens do Carrinho</h3>
          {itensAdicionados.map((item, index) => (
            <div key={item.id} className="item_compra">
              <img src={item.imagem} alt={item.titulo} />
              <div className="item_info">
                <h4>{item.titulo}</h4>
                <p>Quantidade: {item.quantidade}</p>
                <p>Preço: {formataDinheiro(item.preco)}</p>
                <p>Subtotal: {formataDinheiro(item.preco * item.quantidade)}</p>
              </div>
            </div>
          ))}
          
          <div className="total_compra">
            {itensAdicionados.map(somaTotalDeItens)}
            <h3>Total: {formataDinheiro(total.toFixed(2))}</h3>
          </div>
        </div>

        <div className="formulario_container">
          <h3>Informações de Entrega e Pagamento</h3>
          
          <form onSubmit={handleSubmit(onSubmit)} className="formulario_compra">
            <div className="form_section">
              <h4>Dados Pessoais</h4>
              <div className="form_row">
                <div className="form_group">
                  <label>Nome Completo</label>
                  <input
                    type="text"
                    {...register('nome', { required: 'Nome é obrigatório' })}
                    className={errors.nome ? 'error' : ''}
                  />
                  {errors.nome && <span className="error_message">{errors.nome.message}</span>}
                </div>
                
                <div className="form_group">
                  <label>Email</label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido'
                      }
                    })}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error_message">{errors.email.message}</span>}
                </div>
              </div>

              <div className="form_group">
                <label>Telefone</label>
                <input
                  type="tel"
                  {...register('telefone', { required: 'Telefone é obrigatório' })}
                  className={errors.telefone ? 'error' : ''}
                />
                {errors.telefone && <span className="error_message">{errors.telefone.message}</span>}
              </div>
            </div>

            <div className="form_section">
              <h4>Endereço de Entrega</h4>
              <div className="form_row">
                <div className="form_group">
                  <label>CEP</label>
                  <input
                    type="text"
                    {...register('cep', { required: 'CEP é obrigatório' })}
                    className={errors.cep ? 'error' : ''}
                  />
                  {errors.cep && <span className="error_message">{errors.cep.message}</span>}
                </div>
                
                <div className="form_group">
                  <label>Estado</label>
                  <input
                    type="text"
                    {...register('estado', { required: 'Estado é obrigatório' })}
                    className={errors.estado ? 'error' : ''}
                  />
                  {errors.estado && <span className="error_message">{errors.estado.message}</span>}
                </div>
              </div>

              <div className="form_row">
                <div className="form_group">
                  <label>Cidade</label>
                  <input
                    type="text"
                    {...register('cidade', { required: 'Cidade é obrigatória' })}
                    className={errors.cidade ? 'error' : ''}
                  />
                  {errors.cidade && <span className="error_message">{errors.cidade.message}</span>}
                </div>
                
                <div className="form_group">
                  <label>Bairro</label>
                  <input
                    type="text"
                    {...register('bairro', { required: 'Bairro é obrigatório' })}
                    className={errors.bairro ? 'error' : ''}
                  />
                  {errors.bairro && <span className="error_message">{errors.bairro.message}</span>}
                </div>
              </div>

              <div className="form_row">
                <div className="form_group">
                  <label>Rua</label>
                  <input
                    type="text"
                    {...register('rua', { required: 'Rua é obrigatória' })}
                    className={errors.rua ? 'error' : ''}
                  />
                  {errors.rua && <span className="error_message">{errors.rua.message}</span>}
                </div>
                
                <div className="form_group">
                  <label>Número</label>
                  <input
                    type="text"
                    {...register('numero', { required: 'Número é obrigatório' })}
                    className={errors.numero ? 'error' : ''}
                  />
                  {errors.numero && <span className="error_message">{errors.numero.message}</span>}
                </div>
              </div>

              <div className="form_group">
                <label>Complemento</label>
                <input
                  type="text"
                  {...register('complemento')}
                />
              </div>
            </div>

            <div className="form_section">
              <h4>Informações de Pagamento</h4>
              <div className="form_row">
                <div className="form_group">
                  <label>Número do Cartão</label>
                  <input
                    type="text"
                    {...register('numeroCartao', { 
                      required: 'Número do cartão é obrigatório',
                      pattern: {
                        value: /^\d{16}$/,
                        message: 'Número do cartão deve ter 16 dígitos'
                      }
                    })}
                    className={errors.numeroCartao ? 'error' : ''}
                    maxLength="16"
                  />
                  {errors.numeroCartao && <span className="error_message">{errors.numeroCartao.message}</span>}
                </div>
                
                <div className="form_group">
                  <label>CVV</label>
                  <input
                    type="text"
                    {...register('cvv', { 
                      required: 'CVV é obrigatório',
                      pattern: {
                        value: /^\d{3,4}$/,
                        message: 'CVV deve ter 3 ou 4 dígitos'
                      }
                    })}
                    className={errors.cvv ? 'error' : ''}
                    maxLength="4"
                  />
                  {errors.cvv && <span className="error_message">{errors.cvv.message}</span>}
                </div>
              </div>

              <div className="form_row">
                <div className="form_group">
                  <label>Nome no Cartão</label>
                  <input
                    type="text"
                    {...register('nomeCartao', { required: 'Nome no cartão é obrigatório' })}
                    className={errors.nomeCartao ? 'error' : ''}
                  />
                  {errors.nomeCartao && <span className="error_message">{errors.nomeCartao.message}</span>}
                </div>
                
                <div className="form_group">
                  <label>Validade (MM/AA)</label>
                  <input
                    type="text"
                    {...register('validade', { 
                      required: 'Validade é obrigatória',
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                        message: 'Formato deve ser MM/AA'
                      }
                    })}
                    className={errors.validade ? 'error' : ''}
                    placeholder="MM/AA"
                  />
                  {errors.validade && <span className="error_message">{errors.validade.message}</span>}
                </div>
              </div>
            </div>

            <div className="form_actions">
              <Botao type="submit" btn={global}>
                Finalizar Compra
              </Botao>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 