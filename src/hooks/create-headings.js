import { useMemo } from "react";

export default function useHeadings(content) {

  const headings = useMemo(() => {
    if(typeof document === 'undefined'){
        return []
    }
    const htmlObject = document.createElement('div')
    htmlObject.innerHTML = content
    const titles = htmlObject.querySelectorAll("h2")

    // for (var i = 0; i < titles.length; i++){
    //     titles[i].id = 'abc-' + i;
    // }

    return Array.from(titles)
  }, [content])


  return headings
}