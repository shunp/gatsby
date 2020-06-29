/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect } from "react"
import PropTypes from "prop-types"

import EcosystemSection from "./ecosystem-section"
import { PluginsIcon, StartersIcon } from "../../assets/icons/ecosystem-icons"
import { mediaQueries } from "gatsby-design-tokens/dist/theme-gatsbyjs-org"
import {
  setupScrollersObserver,
  unobserveScrollers,
} from "../../utils/scrollers-observer"

export default function EcosystemBoard(props) {
  useEffect(() => {
    setupScrollersObserver()
    return () => unobserveScrollers()
  }, [])

  const { starters, plugins } = props

  return (
    <div
      sx={{
        display: `flex`,
        flexDirection: `column`,
        [mediaQueries.md]: {
          flexDirection: `row`,
          flexWrap: `wrap`,
          height: t =>
            `calc(100vh - (${t.sizes.bannerHeight} + ${t.sizes.headerHeight} + 1px))`,
          pt: 7,
          px: 4,
          pb: 4,
        },
      }}
    >
      <EcosystemSection
        title="Plugins"
        description="Plugins are packages that extend Gatsby sites. They can source content, transform data, and more!"
        subTitle="Featured Plugins"
        icon={<PluginsIcon />}
        links={[
          { label: `Browse Plugins`, to: `/plugins/` },
          {
            label: `Creating Plugins`,
            to: `/docs/creating-plugins/`,
            secondary: true,
          },
          { label: `Using Plugins`, to: `/docs/plugins/`, secondary: true },
        ]}
        featuredItems={plugins}
      />
      <EcosystemSection
        title="Starters"
        description="Starters are Gatsby sites that are preconfigured for different use cases to give you a head start for your project."
        subTitle="Featured Starters"
        icon={<StartersIcon />}
        links={[
          { label: `Browse Starters`, to: `/starters/` },
          { label: `Using Starters`, to: `/docs/starters/`, secondary: true },
        ]}
        featuredItems={starters}
      />
      <EcosystemSection
        title="External Resources"
        description="A curated list of interesting Gatsby community projects and learning resources like podcasts and tutorials."
        links={[
          {
            label: `Browse Resources`,
            to: `/docs/awesome-gatsby-resources/`,
          },
        ]}
      />
    </div>
  )
}

EcosystemBoard.propTypes = {
  starters: PropTypes.array,
  plugins: PropTypes.array,
}
