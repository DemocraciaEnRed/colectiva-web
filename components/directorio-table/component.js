import React, { Component } from 'react'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Icon from 'react-icons-kit'
import { facebook } from 'react-icons-kit/fa/facebook'
import { twitter } from 'react-icons-kit/fa/twitter'
import { instagram } from 'react-icons-kit/fa/instagram'

const Fotito = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url('${(props) => props.foto}');
  background-size: cover;
  background-position: center;
  margin-right: 10px;
`

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  @media screen and (max-width: 600px) {
    border: 0;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    vertical-align: top;
    // width: 25%;
    &.has-text-centered {
      text-align: center;
    }
  }

  td {
    font-size: 12px;
    a {
      color: #fb5735;
    }
    vertical-align: middle;
    text-transform: capitalize;
  }

  th {
    background-color: #fb5735;
    color: white;
    font-weight: bold;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tbody tr:hover {
    background-color: #ddd;
  }  

  @media screen and (max-width: 760px) {
    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
    
    tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: .625em;
    }
    
    td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: .8em;
      text-align: right !important;
    }
    
    td::before {
      /*
      * aria-label has no advantage, it won't be read inside a table
      content: attr(aria-label);
      */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    
    td:last-child {
      border-bottom: 0;
    }
  }
`

const NombreFuncionario = styled.div`

`

const FlexMiddle = styled.div`
  display: flex;
  align-items: center;
`

class DirectorioTable extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    let { values, keys, labels, keyVisibility } = this.props
    return (
      <StyledTable>
        <thead>
          <tr>
            {
              keys.map((key, index) => {
                if (keyVisibility[key] === 'visible') {
                  return (
                    <th key={index} width={key === 'partido' ? '20%' : ''}>{labels[key]}</th>
                  )
                } else {
                  return null
                }
              })
            }
            <th width='100' className='has-text-centered'>Redes</th>
          </tr>
        </thead>
        <tbody>
          {
            values.map((value, index) => {
              return (
                <tr key={index}>
                  {
                    keys.map((key, index) => {
                      if (keyVisibility[key] === 'visible') {
                        if(key === 'nombre') {
                          return (
                            <td key={index} data-label={labels[key]}>
                              <FlexMiddle>
                                <Fotito foto={value['foto']} />
                                <NombreFuncionario>
                                  {value[key]}
                                </NombreFuncionario>
                              </FlexMiddle>
                            </td>
                          )
                        } else {
                          return (
                            <td key={index} data-label={labels[key]}>
                              {value[key] && value[key].toLowerCase()}
                            </td>
                          )
                        }
                      } else {
                        return null
                      }
                    })
                  }
                  <td className='has-text-centered' data-label='Redes'>
                    {
                      value['facebook'] && <a href={value['facebook']} target='_blank' rel='noopener noreferrer'><Icon icon={facebook} size={24} /></a>
                    }
                    {
                      value['twitter'] && <a href={value['twitter']} target='_blank' rel='noopener noreferrer'><Icon icon={twitter} size={24} /></a>
                    }
                    {
                      value['instagram'] && <a href={value['instagram']} target='_blank' rel='noopener noreferrer'><Icon icon={instagram} size={24} /></a>
                    }
                  </td>
                </tr>
              )
            })
          }
          {
            values.length === 0 && <tr>
              <td colSpan={keys.length + 1} className='has-text-centered' style={{ padding: '20px', fontSize: '1.8rem' }}>
                <i>No se encontraron resultados para la búsqueda</i>
              </td>
            </tr>
          }
        </tbody>
      </StyledTable>
    )
  }
}

DirectorioTable.propTypes = {
  values: PropTypes.array.isRequired,
  keys: PropTypes.array.isRequired,
  labels: PropTypes.object.isRequired,
  keyVisibility: PropTypes.object.isRequired
}

export default DirectorioTable
