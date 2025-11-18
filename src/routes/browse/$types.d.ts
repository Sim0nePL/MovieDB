type Media_TypeValue = {
   value: string,
   name: string,
}

type Media_Type = {
   options: Media_TypeValue[],
   value: string,
}

type Media_Genre = {
   value: string,
   enabled: boolean;
}

type Media_Duration = {
   from: number | null,
   to: number | null,
}

type Media_RatingService = {
   value: string,
   name: string,
}

type Media_Ratings = {
   services: Media_RatingService[],
   service: string,
   from: number | null,
}

type Media_Querry = {
   title: string,
   types: Media_Type,
   genres: Media_Genre[],
   duration: Media_Duration,
   ratings: Media_Ratings,
   limit: number
}