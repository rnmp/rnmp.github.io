class CaptionTag < Liquid::Block
  def initialize(tag_name, caption, tokens)
    super
    @caption = caption
  end

  def render(context)
    content = super

    <<~result
    <figure>
      #{Kramdown::Document.new(content).to_html}
      <figcaption>
        #{Kramdown::Document.new(@caption).to_html}
      </figcaption>
    </figure>
    result
  end
end
Liquid::Template.register_tag('caption', CaptionTag)
