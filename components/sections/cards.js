import PropTypes from "prop-types"
import NextImage from "@/components/elements/image"
import Markdown from "react-markdown"

const Cards = ({ data }) => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-between py-12">
      <div className="row flex justify-between flex-wrap">
        {data.cards.map((card,index) => {
          return (
            <div key={index} className="max-w-sm w-6/12 p-4 lg:max-w-full lg:flex">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                // style={{"background-image: url('/img/card-left.jpg')"}}
                title="Woman holding a mug">
                <NextImage media={card.image} />
              </div>
              <div
                className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8 markdown-wrapper">
                  <Markdown>{card.content}</Markdown>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

Cards.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
}

export default Cards
