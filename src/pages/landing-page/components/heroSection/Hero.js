import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { contractType } from '../../../../dicts/contract-type';
import { propertyType } from '../../../../dicts/property-type';

import { allFiltersSelectedPlaceholder, allFiltersSelectedPlaceholderFilter } from '../../../../dicts/all-filters-selected-placeholder';
import { amenitiesQuantity } from '../../../../dicts/amenities-quantity';
import { city } from '../../../../dicts/cities';
import { filterSearchParams } from '../../../../dicts/filter-search-params';
import "./Hero.css";
import hero from "./assets/largo.jpg";

function Hero() {
  const navigate = useNavigate()

  function searchAction(e) {
    e.preventDefault()
    const selectInteresse = document.getElementById('selectInteresse').value;
    const sltTipoImovel = document.getElementById('sltTipoImovel').value;
    const sltTipoCidade = document.getElementById('sltTipoCidade').value;
    const selectQuartos = document.getElementById('selectQuartos').value;
    const vagas = document.getElementById('sltVagas').value;
    const bathRooms = document.getElementById('sltBathrooms').value

    navigate({
      pathname: "/imoveis",
      search: `?${filterSearchParams.propertyType}=${sltTipoImovel}&${filterSearchParams.city}=${sltTipoCidade}&${filterSearchParams.rooms}=${selectQuartos}&${filterSearchParams.contractType}=${selectInteresse}&${filterSearchParams.parking}=${vagas}&${filterSearchParams.bathroom}=${bathRooms}`,
    })
  }
    
  function getAmenityLabelName(label, sufix) {
    if (label === allFiltersSelectedPlaceholder) {
      return label.charAt(0).toUpperCase() + label.slice(1);
    } 
    return [amenitiesQuantity.zero, amenitiesQuantity.one].includes(label) ?`${label} ${sufix}` : `${label} ${sufix}s`
  }
  return (
    <main className="Main">
      <div className="heroLanding" style={{backgroundImage:`url(${hero})`}}>
        BEM VINDO À SANTA BÁRBARA IMÓVEIS
        <a className="botaoHero" href="">
          <button type="submit">
            <Link to="quem-somos" className="saibaMais"> Saiba mais </Link>
          </button>
        </a>
      </div>
      <article className='FormSearchLanding'>
        <form>
          <div className='linha1selectLand'>
            <div>
                <select className="sltModeLand" name="selectInteresse" id="selectInteresse">
                    {Object.entries(contractType).map(([key, value]) => (
                      <option value={key} label={value}> </option>
                    ))}
                </select>
            </div>
            <div className="sltTipoImovelLand">
                <select className="sltModeLand" name="sltTipoImovel" id="sltTipoImovel">
                    {Object.entries(propertyType).map(([key, value]) => (
                      <option value={key} label={value}> </option>
                    ))}
                </select>
            </div>
            <div className="sltCidadeLand">
                <select className="sltModeLand" name="sltTipoCidade" id="sltTipoCidade">
                  {Object.entries(city).map(([key, value]) => (
                    <option value={key} label={value}> </option>
                  ))}
                </select>
            </div>
          </div>
          <div className='linha2selectLand'>
            <div className='sltModeLandContainer'>
              <label htmlFor='sltVagas'>Quartos</label>
              <select className="sltModeLand" name="selectQuartos" id="selectQuartos">
                {[[allFiltersSelectedPlaceholderFilter, allFiltersSelectedPlaceholder], ...Object.entries(amenitiesQuantity)].map(([key, value]) => (
                  <option 
                    value={key} 
                    label={getAmenityLabelName(value, "quarto")}>
                  </option>
                ))}
              </select>
            </div>
            <div className='sltModeLandContainer'>
                <label htmlFor='sltVagas'>Vagas</label>
                <select className="sltModeLand" name="sltVagas" id="sltVagas">
                  {[[allFiltersSelectedPlaceholderFilter, allFiltersSelectedPlaceholder], ...Object.entries(amenitiesQuantity)].map(([key, value]) => (
                    <option 
                      value={key} 
                      label={getAmenityLabelName(value, "vaga")}>
                      </option>
                  ))}
                </select>
            </div>
            <div className='sltModeLandContainer'>
              <label htmlFor='sltVagas'>Banheiros</label>
                <select className="sltModeLand" name="sltBathrooms" id="sltBathrooms">
                  {[[allFiltersSelectedPlaceholderFilter, allFiltersSelectedPlaceholder], ...Object.entries(amenitiesQuantity)].map(([key, value]) => (
                    <option 
                      value={key} 
                      label={getAmenityLabelName(value, "banheiro")}>
                    </option>
                  ))}
                </select>
            </div>
          </div>
          <button className="botaoBuscarLand"  onClick={searchAction}> 
              {/* <Link to="imoveis" className="saibaMais">  */}
              Buscar 
              {/* </Link>  */}
            </button>
        </form>
      </article>
    </main>
  )
}
  
export { Hero };

