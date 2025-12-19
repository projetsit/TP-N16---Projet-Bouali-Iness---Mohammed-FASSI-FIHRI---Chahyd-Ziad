<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    <xsl:param name="tri" select="'timestamp'"/>
    
    <xsl:template match="horaire">
        <tr>
            <td>
                <xsl:attribute name="class">
                    <xsl:choose>
                        <xsl:when test="ligne_id = 1">tram</xsl:when>
                        <xsl:otherwise>bus</xsl:otherwise>
                    </xsl:choose>
                </xsl:attribute>
                <xsl:call-template name="afficher-ligne">
                    <xsl:with-param name="id" select="ligne_id"/>
                </xsl:call-template>
            </td>
            
            <td>
                <xsl:call-template name="afficher-station">
                    <xsl:with-param name="id" select="station_id"/>
                </xsl:call-template>
            </td>
            
            <td class="heure">
                <xsl:value-of select="substring(timestamp, 12, 5)"/>
            </td>
        </tr>
    </xsl:template>
   
    <xsl:template name="afficher-ligne">
        <xsl:param name="id"/>
        <xsl:choose>
            <xsl:when test="$id = 1">T1 (Tram)</xsl:when>
            <xsl:when test="$id = 2">F2 (Bus Rapide)</xsl:when>
            <xsl:otherwise>Ligne <xsl:value-of select="$id"/></xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
    <xsl:template name="afficher-station">
        <xsl:param name="id"/>
        <xsl:choose>
            <xsl:when test="$id = 1">Gare Centre</xsl:when>
            <xsl:when test="$id = 2">Hôtel de Ville</xsl:when>
            <xsl:when test="$id = 3">Université</xsl:when>
            <xsl:otherwise>Station <xsl:value-of select="$id"/></xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
</xsl:stylesheet>
