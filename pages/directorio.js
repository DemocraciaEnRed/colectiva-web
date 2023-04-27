import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
// import { facebook } from 'react-icons-kit/fa/facebook'
// import { twitter } from 'react-icons-kit/fa/twitter'
// import { instagram } from 'react-icons-kit/fa/instagram'
import { table } from 'react-icons-kit/fa/table' 
import {idCardO} from 'react-icons-kit/fa/idCardO'
import Navbar from '../containers/navbar'
import Footer from '../containers/footer'
import DirectorioTable from '../components/directorio-table/component'
import DirectorioCards from '../components/directorio-cards/component'

import getConfig from 'next/config'

const { publicRuntimeConfig: {
  GOOGLE_API_SHEET_KEY,
  GOOGLE_SHEET_ID
} } = getConfig()

const StyledDirectorioContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
`

const StylecDirectorioWrapper = styled.div`
  width: 90%;
  background-color: white;
  padding: 50px 62px 120px 62px;
  @media(max-width:760px){
    padding:20px;
  }
  margin-top: 108px;
  @media (min-width: 1024px) {
    > section {
      width: 90%;
      padding-left:10%;
    }
  }
`

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media(max-width:760px){
    flex-direction: column;
  }
`

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  width: 20%;
  @media(max-width:760px){
    width: 100%;
    margin: 0;
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  input {
    width: 100%;
    padding: 4px 8px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #fb5735;
    border-radius: 4px;
    background-color: #ffffff;
    font-size: 16px;
  }
  select {
    width: 100%;
    padding: 4px 8px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #fb5735;
    border-radius: 4px;
    background-color: #ffffff;
    font-size: 16px;
  }
  label {
    font-size: 16px;
    font-weight: bold;
  }
  button {
    width: 100%;
    padding: 4px 8px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #fb5735;
    border-radius: 4px;
    background-color: #fb5735;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    color: #FFF;
    &:hover {
      cursor: pointer;
      background-color: #b53015;
    }
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const ToggleButton = styled.div`
  width: 100%;
  padding: 4px 8px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #fb5735;
  border-radius: 4px;
  background-color: ${(props) => props.active ? '#fb5735' : '#ffffff'};
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.active ? '#FFF' : '#fb5735'};
  &:hover {
    cursor: pointer;
    background-color: #b53015;
    color: #FFF;
  }
  &:first-child {
    margin-left: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    margin-right: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

const DirectorioTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #2857e6;
  text-align: center;
  @media screen and (max-width: 760px) {
    font-size: 5rem;
  }
`

const DirectorioSubtitle = styled.p`
  font-size: 1.5rem;
  font-family: var(--alter-regular);
  margin-bottom: 40px;
  margin-top: 40px;
  @media screen and (max-width: 760px) {
    font-size: 2rem;
  }
`

const Divider = styled.div`
  width: 75%;
  height: 10px;
  background: url(/static/assets/colores.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
`

const LoadingFiller = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f2f2f2;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`

class Directorio extends Component {
  state = {
    apiKey: GOOGLE_API_SHEET_KEY,
    googleSheetId: GOOGLE_SHEET_ID,
    loading: true,
    mode: 'cards',
    keys: {},
    keyVisibility: {},
    labels: {},
    values: [],
    cargoOptions: [],
    partidoOptions: [],
    comisionOptions: [],
    filter: {
      cargo: null,
      partido: null,
      comision: null,
      nombre: null
    },
    filteredValues: []
  }

  componentDidMount () {
    // fetch data from google sheet
    // eslint-disable-next-line no-undef
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${this.state.googleSheetId}/values/${'Rep. Cámara'}?key=${this.state.apiKey}`)
      .then((res) => res.json())
      .then((res) => {
        const keys = res.values[0]
        const keyVisibility = res.values[1]
        const labels = res.values[2]
        // cargo
        // partido
        // nombre
        // comision
        const values = res.values.slice(3)
        const theLabels = {}
        const theKeyVisibility = {}
        keys.forEach((key, index) => {
          theLabels[key] = labels[index]
          theKeyVisibility[key] = keyVisibility[index]
        })
        const theValues = []
        values.forEach((entry) => {
          // eslint-disable-next-line prefer-const
          const data = {}
          keys.forEach((k, i) => {
            data[k] = entry[i]
            if ([''].includes(entry[i])) {
              data[k] = null
            } else if (entry[i] === undefined) {
              data[k] = null
            } else {
              data[k] = entry[i]
            }
          })
          // remove whitespace, accents and lowercase
          data.traceNombre = data.nombre
            .replace(/\s/g, '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
          theValues.push(data)
        })
        // find unique values for each filter
        const cargoOptions = []
        const partidoOptions = []
        const comisionOptions = []
        theValues.forEach((entry) => {
          if (entry.cargo && !cargoOptions.includes(entry.cargo)) {
            cargoOptions.push(entry.cargo)
          }
          if (entry.partido && !partidoOptions.includes(entry.partido)) {
            partidoOptions.push(entry.partido)
          }
          if (entry.comision && !comisionOptions.includes(entry.comision)) {
            comisionOptions.push(entry.comision)
          }
        })
        // copy filtered values
        const filteredValues = theValues
        // sort options
        cargoOptions.sort()
        partidoOptions.sort()
        comisionOptions.sort()
        const filter = {
          cargo: null,
          partido: null,
          comision: null,
          nombre: null
        }
        this.setState({
          keys,
          labels: theLabels,
          keyVisibility: theKeyVisibility,
          values: theValues,
          filteredValues,
          cargoOptions,
          partidoOptions,
          comisionOptions,
          loading: false,
          filter
        })
      })
      .catch((err) => {
        this.setState({
          showError: true
        })
        console.log(err)
      })
  }

  // if (this.props.router.query.section) {
  //   this.setState({
  //     section: this.props.router.query.section
  //   })
  // } else {
  //   this.setState({
  //     section: 'como-participar'
  //   })
  // }
  // }

  // componentDidUpdate (prevProps, prevState) {
  //   const { query } = this.props.router
  //   if (query.section !== prevProps.router.query.section) {
  //     this.setState({
  //       section: query.section
  //     })
  //   }
  // }

  inputChange = (e) => {
    const { filter } = this.state
    filter[e.target.name] = e.target.value
    this.setState({
      filter
    })
  }

  keyDownNombre = (e) => {
    if (e.keyCode === 13) {
      this.filterData()
    }
  }

  filterData = () => {
    const { filter, values } = this.state
    const keyFilters = ['cargo', 'partido', 'comision']
    const filteredValues = []
    let nombre = []
    if (filter.nombre) {
      // if there are words, split them
      nombre = filter.nombre.split(' ')
      // for each word, remove whitespace, accents and lowercase
      nombre = nombre.map((word) => {
        return word
          .replace(/\s/g, '')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
      })
    }
    values.forEach((entry) => {
      let add = true
      keyFilters.forEach((key) => {
        if (filter[key] && filter[key] !== entry[key]) {
          add = false
        }
      })
      // filter by nombre
      // console.log(!entry.traceNombre.includes(nombre), nombre)
      if (filter.nombre) {
        let found = []
        nombre.forEach((word) => {
          if (entry.traceNombre.includes(word)) {
            found.push(true)
          } else {
            found.push(false)
          }
        })
        // if found array all is true, then add
        console.log(found)
        found = found.every((word) => word === true)
        if (!found) {
          add = false
        }
      }
      if (add) {
        filteredValues.push(entry)
      }
    })
    console.log(filteredValues)
    this.setState({
      filteredValues
    })
  }

  toggleMode = (newMode) => {
    if (newMode === this.state.mode) return
    this.setState({
      mode: newMode
    })
  }

  render () {
    // const { data } = this.state
    return (
      <div>
        <Navbar />
        <StyledDirectorioContainer>
          <StylecDirectorioWrapper>
            <DirectorioTitle>Directorio</DirectorioTitle>
            <Divider />
            <div>
              <DirectorioSubtitle>Conocé el listado de los Senadores y Congresistas, para activar o presionar sobre los proyectos de ley</DirectorioSubtitle>
              <FiltersContainer>
                <Filter>
                  <label htmlFor='nombre'>Nombre</label>
                  <input type='text' name='nombre' id='nombre' onChange={this.inputChange} onKeyDown={this.keyDownNombre} />
                </Filter>
                <Filter>
                  <label htmlFor='cargo'>Cargo</label>
                  <select name='cargo' id='cargo' onChange={this.inputChange}>
                    <option value=''>Todos</option>
                    {
                      this.state.cargoOptions.map((option, index) => {
                        return (
                          <option key={index} value={option}>{option}</option>
                        )
                      })
                    }
                  </select>
                </Filter>
                <Filter>
                  <label htmlFor='partido'>Partido</label>
                  <select name='partido' id='partido' onChange={this.inputChange}>
                    <option value=''>Todos</option>
                    {
                      this.state.partidoOptions.map((option, index) => {
                        return (
                          <option key={index} value={option}>{option}</option>
                        )
                      })
                    }
                  </select>
                </Filter>
                <Filter>
                  <label htmlFor='comision'>Comisión</label>
                  <select name='comision' id='comision' onChange={this.inputChange}>
                    <option value=''>Todos</option>
                    {
                      this.state.comisionOptions.map((option, index) => {
                        return (
                          <option key={index} value={option}>{option}</option>
                        )
                      })
                    }
                  </select>
                </Filter>
                {/* Toggle between table and cards */}
                <Filter>
                  <label>&nbsp;</label>
                  <ButtonsWrapper>
                    <ToggleButton onClick={() => this.toggleMode('table')} active={this.state.mode === 'table'}>
                      <Icon icon={table} size={24} />
                    </ToggleButton>
                    <ToggleButton onClick={() => this.toggleMode('cards')} active={this.state.mode === 'cards'}>
                      <Icon icon={idCardO} size={24} />
                    </ToggleButton>
                  </ButtonsWrapper>
                </Filter>
                {/* Boton filtrar */}
                <Filter>
                  <label htmlFor='comision'>&nbsp;</label>

                  <button onClick={this.filterData}>Filtrar</button>
                </Filter>
              </FiltersContainer>
            </div>
            {
              this.state.loading && <LoadingFiller>
                Cargando...
              </LoadingFiller>
            }
            {
              this.state.showError && <LoadingFiller>
                Hubo un error al cargar los datos
              </LoadingFiller>
            }
            {
              !this.state.loading && !this.state.showError && this.state.mode === 'table' && <DirectorioTable
                values={this.state.filteredValues}
                keys={this.state.keys}
                labels={this.state.labels}
                keyVisibility={this.state.keyVisibility}
              />
            }
            {
              !this.state.loading && !this.state.showError && this.state.mode === 'cards' && <DirectorioCards
                values={this.state.filteredValues}
                keys={this.state.keys}
                labels={this.state.labels}
                keyVisibility={this.state.keyVisibility}
              />
            }
          </StylecDirectorioWrapper>
        </StyledDirectorioContainer>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Directorio)
