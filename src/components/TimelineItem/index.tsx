'use client'

// Core
import React from 'react'

// Styles
import {
  TimelineImageItem,
  TimelineItemActions,
  TimelineItemAdd,
  TimelineItemAddBall,
  TimelineItemContent,
  TimelineItemImageUpload,
  TimelineItemPhrase,
  TimelineItemTime,
  TimelineItemWrapper  
} from './styles'
import {
  HeroSliderCardContent,
  HeroSliderCardPhoto,  
} from '../HeroSliderCard/styles';

// Components
import Input from '../Input';
import { DropdownPopup } from '../DropdownPopup';

// Assets
import { BsPlus } from "react-icons/bs";
import { MdDelete, MdAddAPhoto } from "react-icons/md";
import { FaUndoAlt } from "react-icons/fa";

// Hooks
import useTimelineItem from './useTimelineItem';

// Constants
import { MemoryTypes } from '@/constants/dataArray';

// Types
import { TimelineItemProps } from '@/types/layoutTypes';
import Button from '../Button';

const TimelineItem = ({
  type,
  photo,
  setPhoto,
  // video,
  // setVideo,
  desc,
  setDesc,
  date,
  setDate,
  addItem,
  deleteItem,
}: TimelineItemProps) => {
  const {
    openAddPopup,
    setOpenAddPopup,
    PopupContentRef,    
  } = useTimelineItem();

  const getPhraseLabel = () => {
    switch (type) {
      case 'initial-phrase':
        return 'Frase inicial';
      case 'final-phrase':
        return 'Frase final';
      default:
        return 'Frase'
    }
  }

  const getPhrasePlaceholder = () => {
    switch (type) {
      case 'initial-phrase':
        return 'Nosso amor começou de um jeito tão especial...';
      case 'final-phrase':
        return 'E assim, seguimos juntos, sempre escrevendo novas memórias. Te amo';
      default:
        return 'Foi nesse instante que tudo fez sentido...'
    }
  }
  
  return (
    <TimelineItemContent>
      <TimelineItemTime />
      
      <TimelineItemWrapper>
        {type === 'add' && (
          <TimelineItemAdd ref={PopupContentRef}>
            <DropdownPopup
              list={MemoryTypes}
              position='center'
              openDropdown={openAddPopup}
              onChange={(item) => {
                addItem?.(item);
                setOpenAddPopup(false);
              }}
            />

            <TimelineItemAddBall onClick={() => setOpenAddPopup(true)}>
              <BsPlus size={40} />
            </TimelineItemAddBall>

            <span>Adicionar Lembrança</span>
          </TimelineItemAdd>
        )}

        {(type === 'initial-phrase' || type === 'phrase' || type === 'final-phrase') && (
          <TimelineItemPhrase>
            <span>{getPhraseLabel()}</span>

            <Input
              value={desc}
              onChange={({ target }) => setDesc && setDesc(target.value)}
              placeholder={getPhrasePlaceholder()}
              type="textarea"
            />

            {type !== 'initial-phrase' && (
              <Button onClick={deleteItem}>
                <MdDelete />
              </Button>
            )}
          </TimelineItemPhrase>
        )}

        {type === 'photo' && (
          <>
            {photo ? (
              <TimelineImageItem>
                <HeroSliderCardContent>
                  <HeroSliderCardPhoto>
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="Fotografia Casal"
                    />
                  </HeroSliderCardPhoto>
                </HeroSliderCardContent>

                <Input
                  value={date}
                  onChange={({ target }) => setDate && setDate(target.value)}
                  placeholder="24/07/2021"
                  type="date"
                />

                <h4>O que essa lembrança representa</h4>
                <Input
                  type="textarea"
                  placeholder="O dia do nosso primeiro beijo"
                  onChange={({ target }) => setDesc && setDesc(target.value)}
                  value={desc}
                />

                <TimelineItemActions>
                  <Button variation="border" onClick={() => setPhoto && setPhoto(undefined)}>
                    <FaUndoAlt />
                  </Button>
                  <Button onClick={deleteItem}>
                    <MdDelete />
                  </Button>
                </TimelineItemActions>
              </TimelineImageItem>
            ) : (
              <TimelineItemImageUpload>
                <MdAddAPhoto />
                <p>Click para selecionar uma fotografia</p>                

                <input
                  type="file"
                  onChange={(event) => setPhoto && setPhoto(event.target.files?.[0])}
                />

                <Button onClick={deleteItem}>
                  <MdDelete />
                </Button>
              </TimelineItemImageUpload>
            )}
          </>
        )}
      </TimelineItemWrapper>
    </TimelineItemContent>
  )
}

export default TimelineItem