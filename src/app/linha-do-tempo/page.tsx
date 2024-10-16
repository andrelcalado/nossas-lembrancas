'use client'

// Core
import React from 'react'

// Styles
import { PageContent } from '../styles'
import { TimelineItems, TimelineWrapper } from './styles'

// Components
import Loading from '@/components/Loading'
import Input from '@/components/Input'
import TimelineItem from '@/components/TimelineItem'

// Hooks
import useTimeline from './useTimeline'

const TimeLine = () => {
  const {
    loading,
    handleSetTimelineData,
    timelineData,
    coupleNames,
    setCoupleNames,
    handleAddTimelineItem,
    handleDeleteTimelineItem,
  } = useTimeline();

  return (
    <PageContent>
      {loading ? (
        <Loading loading={loading} size="lg" />
      ) : (
        <TimelineWrapper className='container'>
          <h1>Recrie os <strong>melhores momentos</strong></h1>
          <p>Informe os nomes de vocês, adicione todos os momentos que deseja compartilhar e surpreenda quem ama com uma experiência inesquecível</p>

          <h3>Nome do Casal</h3>
          <Input
            type="text"
            value={coupleNames}
            onChange={({ target }) => setCoupleNames(target.value)}
            placeholder="André e Bia"
          />

          <TimelineItems>
            {coupleNames && (
              <h2>{coupleNames}</h2>
            )}

            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                type={item.type}
                desc={item.desc}
                setDesc={(value) => handleSetTimelineData('desc', index, value)}
                date={item.date}
                setDate={(value) => handleSetTimelineData('date', index, value)}
                deleteItem={() => handleDeleteTimelineItem(index)}
                addItem={handleAddTimelineItem}
              />
            ))}
            <TimelineItem addItem={handleAddTimelineItem} type="add" />

          </TimelineItems>
        </TimelineWrapper>
      )}
    </PageContent>
  )
}

export default TimeLine