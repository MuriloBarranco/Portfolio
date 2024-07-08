import React from "react"

import { Icon, IconItem, IconList, StickFollowIcon, FollowText } from "./styles"

import { socialprofils } from "../../content_option"

import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa"

export const Socialicons = () => {
  return (
    <StickFollowIcon>
      <IconList>
        {socialprofils.twitter && (
          <IconItem>
            <a href={socialprofils.twitter}>
              <Icon as={FaTwitter} />
            </a>
          </IconItem>
        )}
        {socialprofils.github && (
          <IconItem>
            <a href={socialprofils.github}>
              <Icon as={FaGithub} />
            </a>
          </IconItem>
        )}
        {socialprofils.facebook && (
          <IconItem>
            <a href={socialprofils.facebook}>
              <Icon as={FaFacebookF} />
            </a>
          </IconItem>
        )}
        {socialprofils.linkedin && (
          <IconItem>
            <a href={socialprofils.linkedin}>
              <Icon as={FaLinkedin} />
            </a>
          </IconItem>
        )}
        {socialprofils.youtube && (
          <IconItem>
            <a href={socialprofils.youtube}>
              <Icon as={FaYoutube} />
            </a>
          </IconItem>
        )}
        {socialprofils.twitch && (
          <IconItem>
            <a href={socialprofils.twitch}>
              <Icon as={FaTwitch} />
            </a>
          </IconItem>
        )}
      </IconList>
      <FollowText>Me siga</FollowText>
    </StickFollowIcon>
  )
}
