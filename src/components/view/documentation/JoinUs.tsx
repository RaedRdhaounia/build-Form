import { RectangleGroupIcon, CircleStackIcon, BoltIcon, ArrowPathRoundedSquareIcon, CursorArrowRippleIcon, EyeDropperIcon } from '@heroicons/react/20/solid'
import Dependency from '../Dependency'

const dependencyInfo = [
  {title : "Components list " , Icon : RectangleGroupIcon        , description :" see the list of components created first 💁 so you can see different styles you can get your first idea about expects"     },
  {title : "Component data"   , Icon : CircleStackIcon           , description :" you don't know what you start with 🙎, start thinking first of data that you like to share then pass styles"               },
  {title : "Ordering"         , Icon : ArrowPathRoundedSquareIcon, description :" you won't be affaraid of the order 🙇 it is so simple to change the order event after getting finish your page"            },
  {title : "Drag and Drop."   , Icon : CursorArrowRippleIcon     , description :" you don't think  🤦‍♀️ just you need to drag and drop the component at the right place so easy"                               },
  {title : "Styles"           , Icon : EyeDropperIcon            , description :" you can see a basic list of styles but believe that we used a strong and flexible style context. It will grow faster 🏃‍♀️ 🏃‍♂️"},
  {title : "What you wait "   , Icon : BoltIcon                  , description :" We waiting you to make a look and then just don't forget to give us 👨‍💻 your feed back, that's so important for us"         }
]

export default function JoinUs() {
  return (
    <div>
      <ul role="list" className="mt-8 space-y-8 text-gray-600">
        {dependencyInfo.map((info, index) => {
          return (
            <Dependency key={index} title={info.title} Icon={info.Icon} description={info.description} />
          )
        })}
      </ul>
      <p className="mt-8">
        What you wait for it is time to see what we gives for you and just you like simple things, for our vision simplicity is the good way to get users confortable.
      </p>
    </div>
  )
}