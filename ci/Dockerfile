FROM node:12.18.2-alpine as builder

ARG BACKEND_URL
ENV BACKEND_URL=$BACKEND_URL

RUN apk --no-cache add build-base python
RUN npm install npm@6 --global --quiet

WORKDIR /opt
COPY src/ src/
COPY .babelrc .babelrc
COPY .eslintignore .eslintignore
COPY .eslintrc .eslintrc
COPY .prettierrc .prettierrc
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY typestat.json typestat.json
COPY webpack.config.js webpack.config.js
COPY yarn.lock yarn.lock

COPY ci/nginx.conf nginx.conf
COPY ci/create-dotenv.sh create-dotenv.sh

RUN chmod +x /opt/create-dotenv.sh
RUN /opt/create-dotenv.sh

RUN yarn install
RUN npm run build

FROM nginx:stable-alpine
EXPOSE 3000
COPY --from=builder /opt/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /opt/dist /usr/share/nginx/html
RUN chown nginx.nginx /usr/share/nginx/html/ -R
CMD nginx -g 'daemon off;'
