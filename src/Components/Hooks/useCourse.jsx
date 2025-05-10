import React, { useEffect, useState } from 'react'

const useCourse = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("/card.json")
      .then((data) => data.json())
      .then((res) => {
        setCourse(res);
      });
  }, []);

  return [course]
}

export default useCourse