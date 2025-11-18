type Media_TypeValue = {
   value: string,
   name: string,
}

type Media_Type = {
   values: Media_TypeValue[],
   result: string,
}

type Media_Genre = {
   value: string,
   enabled: boolean;
}

type Media_Duration = {
   from: {
      value: number | null,
      enabled: boolean,
   },
   to: {
      value: number | null,
      enabled: boolean,
   }
}

type Media_RatingService = {
   value: string,
   name: string,
}

type Media_Ratings = {
   services: Media_RatingService[],
   service: string,
   from: {
      value: number | null,
      enabled: boolean,
   },
   to: {
      value: number | null,
      enabled: boolean,
   }
}

type Media_Scheme = {
   types: Media_Type,
   genres: Media_Genre[],
   duration: Media_Duration,
   ratings: Media_Ratings,
}