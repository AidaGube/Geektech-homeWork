import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AboutPages = () => {
  const { id } = useParams()
  const baseUrl = 'https://jsonplaceholder.typicode.com/todos'
  const getItem = async (id) => {
    try { 
      const { data } = await axios.get(baseUrl + `/${id}`)
      return data
    } catch (error) {
      console.log('error');
    }
  }

  const [item, setItems] = useState();

  useEffect(() => {
    getItem(id).then(data => {
      setItems(data)
    })
  }, [id])

  return (
    <div>
      <h2>{item?.title}</h2>
      <p>
        There laughing then inquietude trees fanny whether resources china chief questions pure narrow wishing.
        Drift chamber to minuter state went. Has your sixteen give which subject scarcely. Advantages talking instantly mr unaffected decisively staying judgment read certainly matter. Picture continual defer stronger some repulsive though drew females pressed promise blessing under. Loud insensible continual tastes name depend bed sufficient felicity.
        Figure objection called instantly time might admiration allowance pronounce. Whether affection civility woody court. Books any household real shameless account. Margaret game spirit extensive often elinor missed extent head. Excellence talked young company over fail misery pulled fail peculiar.
        Removal private removing but open trees your hearted not help increasing regard matter eldest. Shade am piqued situation greatly felt innate ﻿no again paid played noisier lasted kindness looking mutual. County ferrars more music two connection worthy mistaken recurred fully offer going hills mother. Demesne merits denoting wrong. Wish help drift principles therefore occasion view forfeited company son.
        Body passage thoughts estate sure delight sportsman death equal husband letter depending saw. Whether pretty merry delay sweetness dine stanhill from passed procuring objection shall welcome. While unpleasant cultivated knew civil improved. Round large lively greatest offending supposing marriage noise five enjoyment moreover inhabit home. Resolved trees matters chiefly too.
      </p>
    </div>
  )
}

export default AboutPages